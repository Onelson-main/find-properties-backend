import { Request, Response } from "express";

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
const port = process.env.PORT || 8081;

let properties = [
    {
        "id": 1,
        "name": "Sunnyvale Villa",
        "address": "123 Sunshine Lane, Sunnyvale, CA 94086",
        "price": "$1,200,000",
        "propertyType": "House",
        "imageUrl": "https://unsplash.it/640/425?image=1"
    },
    {
        "id": 2,
        "name": "Oceanview Condo",
        "address": "456 Ocean Drive, Miami Beach, FL 33139",
        "price": "$850,000",
        "propertyType": "Condo",
        "imageUrl": "https://unsplash.it/640/425?image=2"
    },
    {
        "id": 3,
        "name": "Urban Loft",
        "address": "789 City Center Blvd, New York, NY 10001",
        "price": "$1,500,000",
        "propertyType": "House",
        "imageUrl": "https://unsplash.it/640/425?image=3"
    },
    {
        "id": 4,
        "name": "Greenfield Bungalow",
        "address": "321 Greenfield Road, Portland, OR 97205",
        "price": "$650,000",
        "propertyType": "House",
        "imageUrl": "https://unsplash.it/640/425?image=4"
    },
    {
        "id": 5,
        "name": "Lakeside Retreat",
        "address": "654 Lakeshore Drive, Austin, TX 78703",
        "price": "$2,300,000",
        "propertyType": "House",
        "imageUrl": "https://unsplash.it/640/425?image=5"
    },
    {
        "id": 6,
        "name": "Mountain View Cabin",
        "address": "789 Mountain Rd, Aspen, CO 81611",
        "price": "$1,800,000",
        "propertyType": "House",
        "imageUrl": "https://unsplash.it/640/425?image=6"
    },
    {
        "id": 7,
        "name": "Downtown Studio",
        "address": "101 Main St, San Francisco, CA 94105",
        "price": "$950,000",
        "propertyType": "Condo",
        "imageUrl": "https://unsplash.it/640/425?image=7"
    },
    {
        "id": 8,
        "name": "Seaside Villa",
        "address": "202 Ocean Ave, Malibu, CA 90265",
        "price": "$3,500,000",
        "propertyType": "House",
        "imageUrl": "https://unsplash.it/640/425?image=8"
    },
    {
        "id": 9,
        "name": "Country Farmhouse",
        "address": "303 Farm Rd, Nashville, TN 37201",
        "price": "$750,000",
        "propertyType": "House",
        "imageUrl": "https://unsplash.it/640/425?image=9"
    },
    {
        "id": 10,
        "name": "Luxury Condo",
        "address": "404 Sky High Blvd, New York, NY 10001",
        "price": "$4,200,000",
        "propertyType": "Condo",
        "imageUrl": "https://unsplash.it/640/425?image=10"
    },
    {
        id: 11,
        name: 'Riverside Cottage',
        address: '123 Riverbend Rd, Asheville, NC 28801',
        price: '$450,000',
        propertyType: 'House',
        imageUrl: 'https://unsplash.it/640/425?image=11'
    },
    {
        id: 12,
        name: 'Hilltop Mansion',
        address: '456 Hilltop Dr, Beverly Hills, CA 90210',
        price: '$8,500,000',
        propertyType: 'House',
        imageUrl: 'https://unsplash.it/640/425?image=12'
    },
    {
        id: 13,
        name: 'Cozy Townhouse',
        address: '789 Elm St, Denver, CO 80203',
        price: '$600,000',
        propertyType: 'House',
        imageUrl: 'https://unsplash.it/640/425?image=13'
    },
    {
        id: 14,
        name: 'Sunny Beach House',
        address: '321 Beachside Ave, Santa Monica, CA 90402',
        price: '$2,100,000',
        propertyType: 'House',
        imageUrl: 'https://unsplash.it/640/425?image=14'
    },
    {
        id: 15,
        name: 'Modern Condo',
        address: '654 Country Rd, Austin, TX 78701',
        price: '$1,200,000',
        propertyType: 'Condo',
        imageUrl: 'https://unsplash.it/640/425?image=15'
    },
    {
        id: 16,
        name: 'Charming Condo',
        address: '987 Heritage Ln, San Francisco, CA 94107',
        price: '$1,750,000',
        propertyType: 'Condo',
        imageUrl: 'https://unsplash.it/640/425?image=16'
    },
    {
        id: 17,
        name: 'Luxury Condo',
        address: '135 Skyline Blvd, Miami, FL 33139',
        price: '$2,800,000',
        propertyType: 'Condo',
        imageUrl: 'https://unsplash.it/640/425?image=17'
    },
    {
        id: 18,
        name: 'Desert Oasis House',
        address: '246 Palm Dr, Palm Springs, CA 92262',
        price: '$3,200,000',
        propertyType: 'House',
        imageUrl: 'https://unsplash.it/640/425?image=18'
    },
    {
        id: 19,
        name: 'Rustic Log Cabin House',
        address: '357 Timberline Rd, Gatlinburg, TN 37738',
        price: '$550,000',
        propertyType: 'House',
        imageUrl: 'https://unsplash.it/640/425?image=19'
    },
    {
        id: 20,
        name: 'Elegant Condo',
        address: '468 Maple St , Chicago , IL ,60614',
        price: '$1 ,400 ,000',
        propertyType: 'Condo',
        imageUrl: 'https://unsplash.it/640/425?image=20'
    },
    {
        id: 21,
        name: 'Oceanfront Condo',
        address: '789 Coastal Rd , Newport , RI ,02840',
        price: '$3 ,600 ,000',
        propertyType: 'Condo',
        imageUrl: 'https://unsplash.it/640/425?image=21'
    },
    {
        id: 22,
        name: 'Luxury Beach House',
        address: '123 Ocean View Dr , Malibu , CA ,90265',
        price: '$4 ,500 ,000',
        propertyType: 'House',
        imageUrl: 'https://unsplash.it/640/425?image=22'
    },
    {
        id: 23,
        name: 'Chic Urban Condo',
        address: '456 City Center Blvd , Seattle , WA ,98101',
        price: '$1 ,800 ,000',
        propertyType: 'Condo',
        imageUrl: 'https://unsplash.it/640/425?image=23'
    },
    {
        id: 24,
        name: 'Spacious Family House',
        address: '789 Suburban Ln , Plano , TX ,75025',
        price: '$700 ,000',
        propertyType: 'House',
        imageUrl: 'https://unsplash.it/640/425?image=24'
    },
    {
        id: 25,
        name: 'Modern Coastal Condo',
        address: '101 Shoreline Dr , Charleston , SC ,29401',
        price: '$900 ,000',
        propertyType: 'Condo',
        imageUrl: 'https://unsplash.it/640/425?image=25'
    },
    {
        id: 26,
        name: 'Stylish City House',
        address: '202 Urban Way , Atlanta , GA ,30301',
        price: '$1 ,050 ,000',
        propertyType: 'House',
        imageUrl: 'https://unsplash.it/640/425?image=26'
    }
]


app.get('/api/properties', (req: { query: any }, res: Response) => {

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedData = properties.slice(startIndex, endIndex);

    res.status(200).send({
        data: paginatedData,
        noItems: paginatedData.length,
        totalItems: properties.length,
        totalPages: Math.ceil(properties.length/ limit),
        currentPage: page,
    });
});

app.get('/api/properties/:id', (req: Request, res: Response) => {
    let index = properties.findIndex(p => (p.id === Number(req.params.id)))
    if (index != -1) {
        res.status(200).send({ data: properties[index] });
    } else {
        res.status(404).send({ data: null });
    }
});
app.get('*', (req: Request, res: Response) => {
    res.status(404).send({ message: "route not found" });
}
)

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});