export interface Typicode {
    
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: {
        street: string;
        city: string;
        suite: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string; 
        }
    };
    company: {
        bs: string;
        catchPhrase: string;
        name: string;
    };

}