const Api_Key = "service.4b55eedc210d45c5808151d16966dd45"

export default async function GetUserAddress(lat, lng) {
    const data = await fetch(`https://api.neshan.org/v5/reverse?lat=${lat}&lng=${lng}`, {
        headers: {"Api-Key": Api_Key }, 
    },{ mode: 'no-cors'})
    console.log(data);


    
        // if (response.data.address) {
        //   const address = [
        //     response.data.address.road,
        //     response.data.address.suburb,
        //     response.data.address.neighbourhood,
        //     response.data.address.city,
        //     response.data.address.country,
        //   ]
        //     .filter(Boolean)
        //     .join(", ");
        //   return address;
        // } else {
        //   throw new Error("آدرس وجود ندارد");
        // }
}