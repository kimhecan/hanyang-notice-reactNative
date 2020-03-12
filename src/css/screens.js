import { StyleSheet } from 'react-native';

export const HomeCss = StyleSheet.create({

  container: {
    backgroundColor: 'white',
  },
  container2: {
    backgroundColor: 'white',
    height: 600
  },
  list: {
    marginVertical: 20,
    marginHorizontal: 10
  },
  image: {
    width: 50, 
    height: 50, 
    tintColor: '#002D93'
  },
  itemButton: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
    marginBottom: 40,
    height: 170,
    width: 140,
    
    shadowOffset:{  width: 10,  height: 15},
    shadowColor: '#D5D5D5',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 7
  },
  item: {
    color: '#002D93',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5
  },
  item2: {
    color: '#002D93',
    fontSize: 15,
    fontWeight: 'normal',
    textAlign: 'center',
    marginTop: 8
  }
});


export const flatlistCss = StyleSheet.create({
  listView: {
    margin: 30,
  
  },
  listText: {
    fontSize: 18,
    marginBottom: 20,
    color: '#0E354B',
    fontWeight: 'bold'

  },
  elem: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },  
  class: {
    color: 'gray',
  },
  date: {
    color: 'gray',
  },
  border: {
    backgroundColor: '#CECFD1',
    width: '100%',
    height: 0.5,
    marginTop: 20
  }
});