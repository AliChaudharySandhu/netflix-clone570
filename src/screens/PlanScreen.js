import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts, selectUser } from '../features/userSlice';
import db from '../firebase';
import './PlanScreen.css';
import { subscribe } from '../features/userSlice'
function PlanScreen() {

    const [products, setProducts] = useState([]);
    const user = useSelector(selectUser);
    // const [subscription, setSubscription] = useState(null);
    const dispatch = useDispatch();

    useEffect(() =>{
    const unsubscribe = db.collection('customers')
        .doc(user.uid)
        .collection('subscriptions')
        .get()
        .then(snapshopt =>{
            snapshopt.forEach(async subscription =>{
                // console.log(subscription.data())
                dispatch(subscribe({
                    planName: subscription.data().items[0].price.product.name, 
                    role: subscription.data().role,
                    startDate: subscription.data().current_period_start.seconds,
                    endDate: subscription.data().current_period_end.seconds 
                }))

            })
        })

     const unsubscribe2 =  db.collection('customers')
        .doc(user.uid)
        .collection('subscriptions')
        .get().then((snap) =>{
            snap.forEach(async subscription =>{
                dispatch(loadProducts({
                    productName: subscription.data().items[0].price.product.name, 
                }))
            })
        })
        return unsubscribe, unsubscribe2
        
    }, [])


    useEffect(() =>{
       const unsubscribe = db.collection('products')
        .where('active', '==', true)
        .get().then((querySnapshot) =>{
            const products ={};
            querySnapshot.forEach(async productDoc => {

                products[productDoc.id] = productDoc.data();

                const priceSnap = await productDoc.ref.collection
                ("prices").get();
                priceSnap.docs?.forEach(price =>{
                    products[productDoc.id].prices = {
                        priceId: price.id,
                        priceData: price.data(),
                    }
                })
                

            });
            setProducts(products); 
        })
        return unsubscribe;
        
    }, [])

    // console.log(products)
    // console.log(user.subscriptions)


    const loadCheckout = async(priceId, productData) =>{
        // console.log(productData)
        const docRef = await db.collection("customers").doc(user.uid).collection("checkout_sessions")
        .add({
            price: priceId,
            success_url: window.location.origin,
            cancel_url: window.location.origin,
            });


        docRef.onSnapshot(async(snap) =>{
            const{error, sessionId} = snap.data();

            if(error){
                alert(error.message)
            }
            if(sessionId){
                // you have in session now
                const stripe = await loadStripe('pk_test_51IbTLSCiQVp2tMWHB5qpusqRQjgryKIyMMxMGNRDs8x4zkvyAqw95v7cqo3R980OfcwWogR0an5ZDaNCiL6Xvs3d00AFYysA5H')
                stripe.redirectToCheckout({ sessionId});
            };
            
        })
    }

    return (
        <div className= "planScreen">
            <br />
            {user.subscriptions && <p style={{fontSize: "14px"}}>Renewal date: {new Date(user.subscriptions.endDate * 1000).toLocaleDateString()}</p>}
            {Object.entries(products).map(([productId, productData]) =>{
                // console.log(productData.name)


                const isCurrentPackage = user?.products?.productName?.includes(productData.name);
                
                const classes = "planScreen__planActive planScreen__plan";

                return(
                    <div key={productId} className={`${isCurrentPackage}` ? classes : "planScreen__plan"}>
                        <div className="planScreen__Info">
                            <h5>{productData.name}</h5>
                            <h6>{productData.description}</h6>

                        </div>
                        <button className={isCurrentPackage && "isCurrentPackage"} onClick={() => !isCurrentPackage && loadCheckout(productData.prices.priceId , productData)}>{isCurrentPackage ? 'Current Package' : 'Subscribe'}</button>

                    </div>
                )
            })}
        </div>
    )
}

export default PlanScreen
