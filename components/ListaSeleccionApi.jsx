import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { SelectList } from 'react-native-dropdown-select-list';

const ListaSeleccionApi = () => {
  const [selected, setSelected] = useState('');
  const [data, setData] = useState([]);
  const url = 'http://192.168.1.11:4000/v1/users';

  useEffect(() => {
    async function fetchData() {
      axios.get(url).then((res) => {
        let temp = res.data.data.map((item) => {
            return{ key:item.pk_cedula_user, value: item.nombre_user}
        })
        setData(temp)
      }).catch((e) => {
        console.log(e);
      })
    }
    fetchData();
  }, [data]);

  return (
    <View>
      <SelectList
        setSelected={val => setSelected(val)}
        data={data}
        onSelect={() => alert(selected)}
        fontFamily="lato"
      />
    </View>
  );
};

export default ListaSeleccionApi;
