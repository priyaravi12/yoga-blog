import { useState } from "react";

const Home = () => {
    const [name, setName] = useState("bhagyam");
    const [age, setAge] = useState(50);

    const handleClick = (name, age, e) => {
        setName("Ravi");
        setAge(55);

        console.log("name is over written" + name, e, EventTarget);
    };
    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>click</button>
            <p>
                My name is {name} and age is {age}{" "}
            </p>
        </div>
    );
};
