import {View} from 'react-native';
import React, { useState } from 'react';
import {SelectList} from 'react-native-dropdown-select-list';

const ListaSeleccionEstatica = () => {
  const [selected, setSelected] = useState('');

  const data = [
    {key:"1", value:"Mobiles", disabled:true},
    {key:"2", value:"AppLiances"},
    {key:"3", value:"Cameras"},
    {key:"4", value:"Computers", disabled:true},
    {key:"5", value:"Vegetables"},
    {key:"6", value:"Diary Products"},
    {key:"7", value:"Drinks"},
  ]

  return (
    <View>
      <SelectList
        onSelect={() => alert(selected)}
        fontFamily='lato'
        setSelected={(val)=> setSelected(val)}
        data={data}
        save='key'
      />
    </View>
  );
};

export default ListaSeleccionEstatica;
