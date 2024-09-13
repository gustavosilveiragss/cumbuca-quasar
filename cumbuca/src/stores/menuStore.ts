import { defineStore } from 'pinia';
import { MenuItem } from '../models/MenuItem';
import { ref } from 'vue';

export const useMenuStore = defineStore('menuStore', () => {
  const menu = ref([
    new MenuItem(
      0,
      'Simple Burger',
      15.0,
      'A simple burger with a beef patty, lettuce, tomato, and cheese.',
      'https://www.auau.com.br/image/cache/data/up_system/product-13697/TEXAS-BURGUER-1000x1000.jpg'
    ),
    new MenuItem(
      1,
      'Double Burger',
      20.0,
      'A double burger with two beef patties, lettuce, tomato, and cheese.',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYbbHGhZrS8Jn7CGpqzWbQDGFEqfUdPmH7HA&s'
    ),
    new MenuItem(
      2,
      'Chicken Burger',
      18.0,
      'A chicken burger with grilled chicken breast, lettuce, tomato, and cheese.',
      'https://s2-vogue.glbimg.com/F4TMDrT0LsVvTElZUDevP_zGvZc=/0x0:640x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_5dfbcf92c1a84b20a5da5024d398ff2f/internal_photos/bs/2022/Q/K/4pDRJAQqAbvbTKCVKVsg/2017-07-27-smart-burguer-cocoricrok-creditos-wellington-nemeth.jpg'
    ),
  ]);

  function addMenuItem(menuItem: MenuItem) {
    menu.value.push(menuItem);
  }

  function deleteMenuItem(menuItemId: number) {
    const index = menu.value.findIndex(
      (item) => item.menuItemId === menuItemId
    );
    menu.value.splice(index, 1);
  }

  function editMenuItem(menuItem: MenuItem) {
    const index = menu.value.findIndex(
      (item) => item.menuItemId === menuItem.menuItemId
    );
    menu.value[index] = menuItem;
  }

  return {
    menu,
    addMenuItem,
    deleteMenuItem,
    editMenuItem,
  };
});
