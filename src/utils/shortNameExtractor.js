
export const shortNameExtractor = (name) => {
    if (!name || name.trim() === '') return '-';
    const nameArr = name?.split(' ');
    let shortName = '';
    if(nameArr?.length > 0){
        for(var i = 0; i < nameArr.length; i++){
            shortName += nameArr[i].charAt(0);
        }
    }
    return shortName;
}