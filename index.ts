// example 1 กรองเอา Array ใหม่ เอาเฉพาะ element ที่เป็นเลขคู่
const dataList = [1,2,4,5,6,78,43,523,4];
const filterData = dataList.filter(item=>item%2===0);
console.log('filterData',JSON.stringify(filterData));

// example 2 กรองเอา Array ใหม่ เอาเฉพาะ String ที่ขึ้นต้นด้วย Th
const stringList = ['Thailand','Pattaya','Thai smoot','Japanese'];
const filterStringData = stringList.filter(item=>item.startsWith('Th'));
console.log('filterStringData',JSON.stringify(filterStringData));

// example 3 กรอง Dragon ที่ hp ต่ำกว่าหรือเท่ากับ 50
interface Dragon {
 name: string,
 hp: number,
 sp?: number
}

const dragonList: Dragon[] = [{name:'Alan',hp:20,sp:10},{name:'Pex',hp:50,sp:90},{name:'Drago',hp:100,sp:10},{name:'Popin',hp:10}];
// กรองเอาแต่ hp ต่ำกว่าหรือเท่ากับ 50
const lowHpDragon = dragonList.filter(dragon=>dragon.hp<= 50);
console.log('lowHpDragon',JSON.stringify(lowHpDragon));

// โจทย์ กรองเอา Dragon ที่ hp+sp แล้วได้มากกว่า 100 มาแสดงทาง console.log
const HpDragon = dragonList.filter(dragon=>dragon.hp+dragon.sp >= 100);
console.log('lowHpDragon',JSON.stringify(HpDragon));






