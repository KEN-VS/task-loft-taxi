export const serverLogIn = async (email, password, token) => {
  return fetch(
    `https://loft-taxi.glitch.me/auth`,
    {
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify({email, password, token})
    }
  ).then(res => res.json())
};


export const serverSignUp = async (email, password, name,  surname,token) => {
  return fetch(
    `https://loft-taxi.glitch.me/register`,
    {
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify({email, password, name,  surname, token})
    }
  ).then(res => res.json())
};



export const serverSaveCartData = async (cardNumber, expiryDate,cardName,cvc, token) => {
  return fetch(
    `https://loft-taxi.glitch.me/card`,
    {
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify({cardNumber, expiryDate,cardName,cvc, token})
    }
  ).then(res => res.json())
};


export const serverGetCartData = async (token) => {
  return fetch(
    `https://loft-taxi.glitch.me/card?token=${token}`
  ).then(res => res.json())
}