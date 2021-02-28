import React from 'react'
import Card from '../../components/Core/Card'
import LabelComponent from "../../components/Core/Label"
import VehicleDetailsCard from "../../components/Core/VehicleDetailsCard"

function Home() {
    const vehicleDetails = {
        ownerDetails: {
            firstName: "Rohan",
            lastName: "Sharma",
            city: "Bengaluru",
            state: "Karnataka"
        },
        vehicleModel: "Honda City",
        postedAt: "1 Nov, 9.30 AM",
        data1: "Specification 01",
        data2: "Specification 02",
        data3: "Specification 03"
    }
    return (
        <div>
            <LabelComponent className="text-center">Old Car Available</LabelComponent>
            <VehicleDetailsCard data={vehicleDetails} />
        </div>
    )
}

export default Home;
