import { Injectable } from '@angular/core';
import { Firestore, collection, where, query, getDocs, getDoc, limit, doc } from '@angular/fire/firestore';
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }

  getProfile(email:string){
    console.log(email)
    const profileRef = doc(this.firestore, 'profiles', email)
    return getDoc(profileRef)

    // const docRef = this.firestore.collection('profiles').doc(email)
  }
}
