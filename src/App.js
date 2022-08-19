import React from "react";
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
    return (
        <div>
            <button onClick={GetImages}>Get Images</button>
        </div>
    );
};

export default App;
