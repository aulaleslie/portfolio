"use client"

import { useState } from "react";

export default function CCTVPage() {
    const [videos] = useState([
        {
            label: "Amahami",
            url: "https://stream.bimakota.go.id:/CCTVKotaBima/play.html?name=0UY50tIbbFzf1722582560065"
        },
        {
            label: "Lampu Merah Pasar Raya",
            url: "https://stream.bimakota.go.id:/CCTVKotaBima/play.html?name=79BlQ7BEDimC1722583023178"
        },
        {
            label: "Lampu Merah Perempatan Sadia",
            url: "https://stream.bimakota.go.id/CCTVKotaBima/play.html?name=Gqt6ejPfL6H41722908523188"
        },
        {
            label: "Pertigaan Duta Ban",
            url: "https://stream.bimakota.go.id/CCTVKotaBima/play.html?name=R6W3JQW3TdSt1722585322741"
        },
        {
            label: "Taman Kodo",
            url: "https://stream.bimakota.go.id:/CCTVKotaBima/play.html?name=GhZOTQHisLwR1732073259797"
        },
        {
            label: "Lampu Merah Polres Bimakota",
            url: "https://stream.bimakota.go.id:/CCTVKotaBima/play.html?name=MQUtYYIJM8cR1722402246400"
        },
        {
            label: "Jembatan Penatoi 1",
            url: "https://stream.bimakota.go.id:/CCTVKotaBima/play.html?name=Admin555555"
        },
        {
            label: "Jembatan Penatoi 2",
            url: "https://stream.bimakota.go.id:/CCTVKotaBima/play.html?name=Admin666666"
        },
        {
            label: "Lampu Merah Santi",
            url: "https://stream.bimakota.go.id:/CCTVKotaBima/play.html?name=Admin222222"
        },
        {
            label: "Lapangan Lampe",
            url: "https://stream.bimakota.go.id:/CCTVKotaBima/play.html?name=Admin333333"
        },
        {
            label: "Lampu Merah Lewirato",
            url: "https://stream.bimakota.go.id:/CCTVKotaBima/play.html?name=Admin44332211"
        },
        {
            label: "Pertigaan Terminal Kumbe",
            url: "https://stream.bimakota.go.id:/CCTVKotaBima/play.html?name=Admin444444"
        },
        {
            label: "Tanjakan Ule 1",
            url: "https://stream.bimakota.go.id:/CCTVKotaBima/play.html?name=Admin888888"
        },
        {
            label: "Tanjakan Ule 2",
            url: "https://stream.bimakota.go.id:/CCTVKotaBima/play.html?name=Admin999999"
        },
        {
            label: "Terminal Jatibaru",
            url: "https://stream.bimakota.go.id:/CCTVKotaBima/play.html?name=JATIBARU01"
        },
        {
            label: "Jembatan Jatibaru",
            url: "https://stream.bimakota.go.id:/CCTVKotaBima/play.html?name=JATIBARU02"
        },
        {
            label: "Pasar Amahami",
            url: "https://stream.bimakota.go.id:/CCTVKotaBima/play.html?name=pasar02"
        },
        {
            label: "Lampu Merah Kantor POS Ranggo",
            url: "https://stream.bimakota.go.id:/CCTVKotaBima/play.html?name=ranggo"
        },
        {
            label: "Pertigaan Bulog",
            url: "https://stream.bimakota.go.id:/CCTVKotaBima/play.html?name=bulog"
        },
        {
            label: "Pertigaan Tanjung",
            url: "https://stream.bimakota.go.id:/CCTVKotaBima/play.html?name=tanjung"
        },
        {
            label: "Bendungan Kodo",
            url: "https://stream.bimakota.go.id:/CCTVKotaBima/play.html?name=kodo"
        },
        {
            label: "Jembatan Rontu",
            url: "https://stream.bimakota.go.id:/CCTVKotaBima/play.html?name=rontu"
        },
        {
            label: "Batas Kota NIU 1",
            url: "https://stream.bimakota.go.id:/CCTVKotaBima/play.html?name=batasKotaNiu1"
        },
        {
            label: "Batas Kota NIU 2",
            url: "https://stream.bimakota.go.id:/CCTVKotaBima/play.html?name=batasKotaNiu2"
        },
        {
            label: "Toloweri Bendungan",
            url: "https://www.youtube.com/embed/NmDfR8kxVfk?si=IG1aU58VWANfXoyt"
        },
        {
            label: "Toloweri 1",
            url: "https://www.youtube.com/embed/6K24rdlr0S4?si=5zNnFoLBphcEu-IO"
        },
        {
            label: "Toloweri 2",
            url: "https://www.youtube.com/embed/CH44tfD1gOs?si=J-e6jWINPcpxScT_"
        },
        {
            label: "Kabanta 1",
            url: "https://www.youtube.com/embed/lMUB6ehCDnA?si=Nf0qyv8XAJilbx2w"
        },
        {
            label: "Kabanta 2",
            url: "https://www.youtube.com/embed/T5TlyprCl9A?si=tm4Nu7jukmTdM17I"
        },
        {
            label: "Kabanta 3",
            url: "https://www.youtube.com/embed/SAugXNqfMc8?si=XhUSLfPoOLbZAAhl"
        }
    ]);

    return (
        <section className="p-4 bg-gray-100 dark:bg-gray-900">
            <h1 className="text-3xl font-bold text-center mb-8">CCTV Grid</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow p-4"
                    >
                        <h2 className="text-lg font-bold mb-2">{video.label}</h2>
                        <iframe
                            src={video.url}
                            title={video.label}
                            allow="autoplay"
                            className="w-full h-48 rounded-lg"
                        ></iframe>
                    </div>
                ))}
            </div>
        </section>
    );
}