import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { AxiosXenditPayment } from './Config/axiosRequest'; 

function App() {
  const xenditAxios=AxiosXenditPayment();
  useEffect(() => {
  }, [])
  
  async function testXendit() {
    try {
      await xenditAxios
        .post("invoices", {
          external_id: 'xendit_test_id_1',
          amount: 110000,
          currency: 'IDR',
          customer: {
              given_names: 'Ahmad',
              surname: 'Gunawan',
              email: 'ahmad_gunawan@example.com',
              mobile_number: '+6287774441111',
          },
          customer_notification_preference: {
              invoice_paid: ['email', 'whatsapp']
          },
          success_redirect_url: 'example.com/success',
          failure_redirect_url: 'example.com/failure',
          items: [
              {
                  name: 'Double Cheeseburger',
                  quantity: 1,
                  price: 7000,
                  category: 'Fast Food'
              },
              {
                  name: 'Chocolate Sundae',
                  quantity: 1,
                  price: 3000,
                  category: 'Fast Food'
              }
          ],
          fees: [
              {
                  type: "Delivery",
                  value: 10000
              }
          ]
      })
        .then((res) => res.data)
        .then((data) => {
          console.log(data);
        }
        );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="#"
          rel="noopener noreferrer"
          onClick={()=>{testXendit()}}
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
