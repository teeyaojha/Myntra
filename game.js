      $("#shirt_button").click(function(){
      $("#shirt-menu").css("visibility", "visible"); });
      $("#pant_button").click(function(){
      $("#pant-menu").css("visibility", "visible"); });
      $("#dress_button").click(function(){
      $("#dress-menu").css("visibility", "visible"); });
      

      function showGrid(category) {
        const categories = ['tops', 'bottoms', 'dresses', 'shoes', 'accessories'];
        categories.forEach(cat => {
            const grid = document.getElementById(cat);
            if (grid) {
                grid.style.display = (cat === category) ? 'block' : 'none';
            }
        });
    
        const items = document.querySelectorAll('.category-item');
        items.forEach(item => {
            if (item.textContent.toLowerCase() === category) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    function selectItem(imageSrc, itemClass) {
        const item = document.querySelector(`.${itemClass}`);
        item.src = imageSrc;
        item.style.visibility = 'visible'; // Ensure the item becomes visible
    }
       
    
    function showGrid(category) {
        const grids = document.querySelectorAll('.item-grid');
        grids.forEach(grid => {
            grid.style.display = 'none';
        });
    
        const activeCategory = document.querySelector(`#${category}`);
        if (activeCategory) {
            activeCategory.style.display = 'block';
        }
    }
      