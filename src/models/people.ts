export interface Person {
    id: number;
    name: string;
    lastName: string;
    firstName: string;
    age: number;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
    category: string;
    categoryImage: string;
    levelOfHappiness: number;
    favorite: boolean;
}