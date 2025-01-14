import React from "react"

const useMediaQuery = (query: string)=> {
    const [change, setChanges] = React.useState<boolean>(false)

    React.useEffect(()=> {
        const media = window.matchMedia(query);
    
        if(media.matches !== change) {
            setChanges(media.matches)
        }

        const listener = ()=> setChanges(media.matches)

        window.addEventListener("resize", listener);

        return ()=> window.removeEventListener("resize", listener)
    }, [change, query])



    return change
}

export default useMediaQuery

