import { toast } from "react-toastify";

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
        toast("Already exist")
    }
    else{
        storedAppData.push(id);
        const data = JSON.stringify(storedAppData)
        localStorage.setItem("App", data)
    }
}

const removeStoredDB = (id)=>{
    const stored = getStoredApp()
    const filtered = stored.filter(item => parseInt(item) !== (id));
    localStorage.setItem("App", JSON.stringify(filtered))
}


export {addStoredDB, getStoredApp, removeStoredDB}