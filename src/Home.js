import React from 'react'
import './Home.css'
import primevideo from './primevideologo.png'
import Product from './Product'
import p2 from './p2.png'
import p1 from './p1.png'
import p3 from './p3.png'
import p4 from './p4.png'
import p5 from './p5.png'
import p6 from './p6.png'

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
            <img className = 'home__container__logo' src = {primevideo}/>
            <div className='home__row'>
                <Product 
                  id = {1}
                  title = "Noise Twist Round dial Smart Watch with Bluetooth Calling, 1.38 TFT Display, up-to 7 Days Battery, 100+ Watch Faces, IP68, Heart Rate Monitor, Sleep Tracking (Silver Grey)"
                  image = {p1}
                  rating = {4}
                  price = {1799}
                />
                <Product 
                  id = {2}
                  title = "PGSA2Z Bluetooth Fm Usb Aux Card Mp3 Stereo Audio Player Decoder Module Kit With Remote 6283 Single Ic Audio Amplifier Stereo Circuit Board DIY"
                  image = {p2}
                  rating = {3}
                  price = {71}
                />
            </div>
            <div className='home__row'>
                <Product 
                  id = {3}
                  title = "Monopoly Super Electronic Banking Board Game, Electronic Banking Unit, Cashless Gameplay Tap Technology, for Ages 8 and Up, Best Rakshabandhan Rakhi Gift"
                  image = {p3}
                  rating = {3}
                  price = {19.99}
                />
                <Product 
                  id = {4}
                  title = "Redgear Pro Wireless Gamepad with 2.4GHz Wireless Technology, Integrated Dual Intensity Motor, Illuminated Keys for PC(Compatible with Windows 7/8/8.1/10 only)"
                  image = {p4}
                  rating = {4}
                  price = {1499}
                />
                <Product 
                  id = {5}
                  title = "ASUS ROG Strix GA35, 12 Core, AMD Ryzen 9 5900X, Gaming Desktop (32GB/1TB HDD + 1TB SSD/10GB NVIDIA GeForce RTX 3080 Graphics/Windows 11/with Keyboard & Mouse/Star Black/15 kg), G35DX-IN011W"
                  image = {p6}
                  rating = {4}
                  price = {303990}
                />
            </div>
            <div className='home__row'>
                <Product 
                  id = {6}
                  title = "CHIST I5 Gaming Pc (Core I5 Processor/Ddr3 8Gb Ram /512Gb Ssd/Gt 710 2Gb Graphics/19 Inch Inch Hd Led Monitor/Gaming Keyboard Mouse/Windows 10/Wifi-Bluetooth)Intel"
                  image = {p5}
                  rating = {3}
                  price = {22999}
                />
            </div>
      </div>
    </div>
  )
}

export default Home
