#include <bits/stdc++.h>
using namespace std;

struct Apartment {
    string number;
    int rooms;
    string address;
    int rent;
    bool occupied;
};

struct Landlord {
    string name, mobile, apartmentNo, address;
    int rent;
};

struct Tenant {
    string name, mobile, gender, availability, apartmentNo;
};

struct Payment {
    string name, mobile, gender, apartmentNo, date;
    int amount, months;
};

// Get today's date in YYYY-MM-DD format
string today() {
    time_t t = time(nullptr);
    tm *lt = localtime(&t);
    char buf[11];
    strftime(buf, sizeof(buf), "%Y-%m-%d", lt);
    return string(buf);
}

// Global vectors
vector<Apartment> apartments;
vector<Landlord> landlords;
vector<Tenant> tenants;
vector<Payment> payments;

// Function declarations
void showDashboard();
void listApartments();
void addApartment();
void listLandlords();
void addLandlord();
void listTenants();
void addTenant();
void listPayments();
void addPayment();

int main() {
    // Sample data
    apartments = {
        {"101", 3, "Dhaka, Mirpur 1", 18000, false},
        {"102", 2, "Dhaka, Mirpur 2", 15000, true},
        {"103", 3, "Dhaka, Mirpur 3", 19000, false}
    };
    landlords = {
        {"Rahim Uddin","01711111111","101","Dhaka, Mirpur 1",18000},
        {"Karim Ahmed","01722222222","102","Dhaka, Mirpur 2",15000}
    };
    tenants = {
        {"Sumaiya","01633333333","Female","Assigned","102"},
        {"Faisal","01544444444","Male","Looking",""}
    };
    payments = {
        {"Sumaiya","01633333333","Female","102",today(),15000,1}
    };

    int choice;
    do {
        cout << "\n=== House Rental System ===\n";
        cout << "1. Dashboard\n2. Apartments\n3. Landlords\n4. Tenants\n5. Rent Payments\n0. Exit\n";


