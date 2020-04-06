const recipes = {
    getRecipeByQuery: async function(query){
        if(query !== ""){
            const YOUR_APP_KEY = "bd4709e3e1559d29b8cc715d180f77b0";
            const YOUR_APP_ID = "27e2c055";
            const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=6`;
            const response = await fetch(url);
            const data = await response.json();
            return data;
        }
    }
}

export default recipes;