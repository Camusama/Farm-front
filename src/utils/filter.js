export function filterData(data) {
  let res = []
  let classname = []
  for (let i in data) {
    if (classname.indexOf(data[i].class) === -1) {
      classname.push(data[i].class)
    }
  }
  for (let i in classname) {
    let pest = {}
    pest.class = classname[i]
    pest.pests = []
    for (let j in data) {
      if (data[j].class === classname[i]) {
        pest.pests.push({
          id: data[j].id,
          name: data[j].name,
          img: data[j].img ? data[j].img : ''
        })
      }
    }
    res.push(pest)
  }
  return res
}

export function filterArr(list, sectionCount) {
  let arrTemp = []
  let index = 0
  for (let i = 0; i < list.length; i++) {
    index = parseInt(i / sectionCount)
    if (arrTemp.length <= index) {
      arrTemp.push([])
    }
    arrTemp[index].push(list[i])
  }
  return arrTemp
}
