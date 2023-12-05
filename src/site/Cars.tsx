import React from "react";

type CarType = {
    manufacturer: string
    model: string
}

type CarsPropsType = {
    cars: Array<CarType>
}

export const Cars = (props: CarsPropsType) => {
    const cars = props.cars.map((car, idx) => {
        return (
            <li key={idx}>
                <div>Manufacturer: {car.manufacturer}</div>
                <div>Model: {car.model}</div>
            </li>
        );
    })

    return (
        <ul>
            {cars}
        </ul>
    )
}