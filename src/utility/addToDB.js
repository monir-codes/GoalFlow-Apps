const getStoredApp = ()=>{

    const storedAppSTR = localStorage.getItem("App")
    if (storedAppSTR){
        const storedAppData = JSON.parse(storedAppSTR);
        return storedAppData;
    }
    else{
        return []
    }
}

const addStoredDB = (id)=>{

    const storedAppData = getStoredApp();
    if(storedAppData.includes(id)){
        alert("Already exist")
    }
    else{
        storedAppData.push(id);
        const data = JSON.stringify(storedAppData)
        localStorage.setItem("App", data)
    }
}


export {addStoredDB, getStoredApp}