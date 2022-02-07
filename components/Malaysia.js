import {useState, useEffect} from "react"
import { Text, View } from 'react-native';

export default function Malaysia() {
    const [MYStats, setMYStats] = useState()

    useEffect(() => {
        fetch("https://disease.sh/v3/covid-19/countries/my", {
            method: "GET"
        })
        .then(res => res.json())
        .then(data => {
            console.log("Malaysia Statistics:")
            console.log(data)
            setMYStats(data)
        })
    }, [])

    return (
        (MYStats)
        ?
            <View>
                <Text>
                    <h1 style={{textAlign: "center"}}>Statistics for Malaysia</h1>
                    <h3 style={{textDecoration: "underline", textAlign: "center"}}>Total so far</h3>
                    <p style={{textAlign: "center"}}>Active Cases: {MYStats.cases}</p>
                    <p style={{textAlign: "center"}}>Recovered: {MYStats.recovered}</p>
                    <p style={{textAlign: "center"}}>Deaths: {MYStats.deaths}</p>
                    <h3 style={{textDecoration: "underline", textAlign: "center"}}>Today</h3>
                    <p style={{textAlign: "center"}}>Active Cases: {MYStats.todayCases}</p>
                    <p style={{textAlign: "center"}}>Recovered: {MYStats.todayRecovered}</p>
                    <p style={{textAlign: "center"}}>Deaths: {MYStats.todayDeaths}</p>
                </Text>
            </View>
        :
            <View>
                <Text>
                    <h1 style={{textAlign: "center"}}>Loading...</h1>
                </Text>
            </View>
    )
}