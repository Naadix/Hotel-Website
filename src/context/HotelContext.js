import { createContext } from 'react'
import allrooms_1 from '/src/assets/allrooms_1.jpg'
import allrooms_2 from '/src/assets/allrooms_2.jpg'
import allrooms_3 from '/src/assets/allrooms_3.jpg'
import allrooms_4 from '/src/assets/allrooms_4.jpg'

export const HotelContext = createContext()

      export const roomsData = [
            {
                _id: "a1f64c7197bc1234abcd9012",
                hotel: "Alpine View Lodge",
                city: "Los Angeles",
                address: "112 Mountain Rd, Aspen, Colorado, USA",
                roomType: "King Suite",
                pricePerNight: 450,
                rating: 2,
                amenities: ["Balcony", "Sea View", "High-Speed WiFi"],
                images: allrooms_1,
                isAvailable: true,
                createdAt: "2025-04-12T09:15:00.000Z",
                updatedAt: "2025-04-12T09:15:00.000Z",
                __v: 0,
            },
            {
                _id: "b2e75d8298cd2345bcde0123",
                hotel: "Garden Luxe Hotel",
                roomType: "Standard Twin",
                address: "45 Emirgan St, Sariyer, Istanbul, Türkiye",
                city: "Istanbul",
                pricePerNight: 280,
                amenities: ["TV", "City View", "Breakfast Included"],
                images: allrooms_2,
                rating: 4,
    
                isAvailable: false,
                createdAt: "2025-04-13T11:30:00.000Z",
                updatedAt: "2025-04-13T11:30:00.000Z",
                __v: 0,
            },
            {
                _id: "c3d86e93a9de3456cdef1234",
                hotel: "UrbanStay Central",
                roomType: "Luxury Single",
                pricePerNight: 320,
                address: "210 Lexington Ave, Manhattan, New York, USA",
    
                city: "New York",
                amenities: ["Work Desk", "Garden Access", "Air Conditioning"],
                images: allrooms_3,
                rating: 5,
                isAvailable: true,
                createdAt: "2025-04-14T14:45:00.000Z",
                updatedAt: "2025-04-14T14:45:00.000Z",
                __v: 0,
            },
    
            {
                _id: "d4f97fa4b0ef4567defa2345",
                hotel: "King Suite",
                roomType: "Deluxe Family Room",
                pricePerNight: 390,
                address: "88 Lotus Lake Rd, Guilin, Guangxi, China",
    
                amenities: ["Mini Bar", "Mountain View", "Free Parking"],
                images: allrooms_4,
                rating: 3,
                city: "China",
                isAvailable: true,
                createdAt: "2025-06-22T09:00:00.000Z",
                updatedAt: "2025-06-22T09:00:00.000Z",
                __v: 0,
            }
        ];