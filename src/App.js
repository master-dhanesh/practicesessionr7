import React, { useEffect } from "react";
import axios from "axios";

const App = () => {
    const GetImages = async () => {
        try {
            const { data } = await axios.get("https://picsum.photos/v2/list");
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        GetImages();
    }, []);

    return <div>Whatch in Console</div>;
};

export default App;
