import {useState, useEffect} from "react"

export const usePizzaOfTheDay = () => {
    const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);

    useEffect(() => {
        async function fetchPizzaOfTheDay() {
            const response = await fetch("/api/pizza-of-the-day");
            const data = await response.json();
            setPizzaOfTheDay(data);
        } 
    fetchPizzaOfTheDay();
    }, []); // the empty array means it will only run once when the component mounts

    return pizzaOfTheDay;
}