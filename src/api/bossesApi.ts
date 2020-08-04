import db from '../firebase'

import { TBoss, TAddBoss, TBossesAvailableTypes } from '../types/types'

export default {
  getAllBosses: () => {
    let arrWithBosses = [] as Array<Object>
    const res = db
      .collection('bosses')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const obj = {
            _id: doc.id,
            ...doc.data(),
          }
          return (arrWithBosses = [...arrWithBosses, obj])
        })
        return arrWithBosses
      })
    return res
  },
  getBosses: async (type: TBossesAvailableTypes) => {
    let arrWithBosses = [] as Array<TBoss>
    const res = db
      .collection('bosses')
      .where('category', '==', type)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const obj = {
            _id: doc.id,
            ...doc.data(),
          } as TBoss
          return (arrWithBosses = [...arrWithBosses, obj])
        })
        return arrWithBosses
      })
    return res
  },
  addNewBoss: (data: TAddBoss) => {
    db.collection('bosses')
      .add(data)
      .then(function (docRef) {
        console.log('Document was successfully written')
        return 'Document was successfully written'
      })
      .catch(function (error) {
        console.log('Error adding document: ', error)
        return error
      })
  },
  addArrayOfBosses: (bossesArr: Array<TAddBoss>) => {
    bossesArr.forEach((data) => {
      db.collection('bosses')
        .add(data)
        .then(function (docRef) {
          console.log('Document was successfully written')
          return 'Document was successfully written'
        })
        .catch(function (error) {
          console.log('Error adding document: ', error)
          return error
        })
    })
  },
}
