const autoComplete = (search: string, items: string[], maxResult: number): string[] => {

    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(search.toLowerCase())
    );

    
    filteredItems.sort((a, b) => {
        const indexA = a.toLowerCase().indexOf(search.toLowerCase());
        const indexB = b.toLowerCase().indexOf(search.toLowerCase());
        
        if (indexA !== indexB) {
            return indexA - indexB; 
        } else {
            return a.localeCompare(b); 
        }
    });

    return filteredItems.slice(0, maxResult);
}

const items = ["Mother", "Think", "Worthy", "Apple", "Android"];

console.log(autoComplete("th", items, 2))