import {useState, useEffect} from "react"
import { Text, View } from 'react-native';

export default function USA() {
    const [USAStats, setUSAStats] = useState()

    useEffect(() => {
        fetch("https://disease.sh/v3/covid-19/countries/usa", {
            method: "GET"
        })
        .then(res => res.json())
        .then(data => {
            console.log("USA Statistics:")
            console.log(data)
            setUSAStats(data)
        })
    }, [])

    return (
        (USAStats)
        ?
            <View>
                <Text>
                    <h1 style={{textAlign: "center"}}>Statistics for the United States of America</h1>
                    <h3 style={{textDecoration: "underline", textAlign: "center"}}>Total so far</h3>
                    <p style={{textAlign: "center"}}>Active Cases: {USAStats.cases}</p>
                    <p style={{textAlign: "center"}}>Recovered: {USAStats.recovered}</p>
                    <p style={{textAlign: "center"}}>Deaths: {USAStats.deaths}</p>
                    <h3 style={{textDecoration: "underline", textAlign: "center"}}>Today</h3>
                    <p style={{textAlign: "center"}}>Active Cases: {USAStats.todayCases}</p>
                    <p style={{textAlign: "center"}}>Recovered: {USAStats.todayRecovered}</p>
                    <p style={{textAlign: "center"}}>Deaths: {USAStats.todayDeaths}</p>
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