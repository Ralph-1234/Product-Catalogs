import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [RouterModule, CommonModule, RouterLink],
  templateUrl: './lists.html',
  styleUrl: './lists.css'
})
export class Lists {

  products = [
    {id: 1, name: "Iphone 6s", price: 4000, location: "SM Baguio"},
    {id: 2, name: "Iphone X", price: 6000, location: "SM San Fernando"},
    {id: 3, name: "Iphone Xs", price: 6500, location: "SM Baguio"},
    {id: 4, name: "Iphone XR", price: 6500, location: "SM Tarlac"},
    {id: 5, name: "Iphone 12 ProMax", price: 12000, location: "SM Rosales"},
    {id: 6, name: "TulPhone", price: 12000, location: "SM Rosales"},
    {id: 7, name: "Galaxy Tab S10 Lite", price: 12000, location: "SM Rosales"},
    {id: 8, name: "Galaxy A07 4G", price: 12000, location: "SM Rosales"},
    {id: 9, name: "Galaxy F36", price: 12000, location: "SM Rosales"},
    {id: 10, name: "Galaxy Z Fold7", price: 15000, location: "SM Rosales"},
    {id: 11, name: "Galaxy A36 5G", price: 26000, location: "SM Baguio"},
    {id: 12, name: "Galaxy S25", price: 27000, location: "SM Baguio"},
    {id: 13, name: "Galaxy S25+", price: 30000, location: "SM Baguio"},
    {id: 14, name: "Galaxy S24", price: 48000, location: "SM Baguio"},
    {id: 15, name: "Galaxy S24+", price: 50000, location: "SM Baguio"},
    {id: 16, name: "Galaxy S24+ Ultra", price: 56000, location: "SM Baguio"},
    {id: 17, name: "Asus VivoBook16", price: 59000, location: "Easy PC"},
    {id: 18, name: "Lenovo LOQ 15IRX9", price: 60000, location: "PC EXPRESS"},
    {id: 19, name: "Lenovo LOQ 15IAX9", price: 62000, location: "PC EXPRESS"},
    {id: 20, name: "Lenovo LOQ 15ARP9", price: 77000, location: "PC EXPRESS"},
    {id: 21, name: "Lenovo LOQ 15IAX9E", price: 88000, location: "PC EXPRESS"},
    {id: 22, name: "GeForce RTX 3050", price: 89000, location: "PC EXPRESS"},
    {id: 23, name: "GeForce RTX 4050", price: 92000, location: "PC EXPRESS"},
    {id: 24, name: "HP OMEN 16 GeForce RTX 5060 Intel", price: 94000, location: "PC EXPRESS"},
    {id: 25, name: "PCX GHF HYDRA (i7-5070 OC) - GeForce RTX 5070", price: 98000, location: "PC EXPRESS"},
    {id: 26, name: "PCX ASUS ROG G700TF GeForce RTX 5080", price: 99000, location: "SM Baguio"},
    {id: 27, name: "ASUS ROG NUC 15 2025 GeForce RTX 5080", price: 99999, location: "SM Baguio"},
    {id: 28, name: "MSI GeForce RTX 5090 SUPRIM SOC", price: 102000, location: "SM Baguio"},
    {id: 29, name: "Lenovo Legion T7 34IAS10", price: 142000, location: "SM Baguio"},
    {id: 30, name: "RTX 5080 Gaming Desktop PC AMD Ryzen 7 9800X3D", price: 160000, location: "EASY PC"},
  ];
}
