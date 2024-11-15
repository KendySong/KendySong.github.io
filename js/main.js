for (let i = 0; i < 7; i++)
{
    const items = [
        {
            position: 0,
            el: document.getElementById('carousel-item-1-'+i),
        },
        {
            position: 1,
            el: document.getElementById('carousel-item-2-'+i),
        },
        {
            position: 2,
            el: document.getElementById('carousel-item-3-'+i),
        },
        {
            position: 3,
            el: document.getElementById('carousel-item-4-'+i),
        },
    ];
    
    // options with default values
    const options = {
        defaultPosition: 1,
        interval: 3000,
    
        indicators: {
            activeClasses: 'bg-white',
            inactiveClasses:
                'bg-white/50 hover:bg-white',
            items: [
                {
                    position: 0,
                    el: document.getElementById('carousel-indicator-1-'+i),
                },
                {
                    position: 1,
                    el: document.getElementById('carousel-indicator-2-'+i),
                },
                {
                    position: 2,
                    el: document.getElementById('carousel-indicator-3-'+i),
                },
                {
                    position: 3,
                    el: document.getElementById('carousel-indicator-4-'+i),
                },
            ],
        },
    
        /*
        // callback functions
        onNext: () => {
            console.log('next slider item is shown');
        },
        onPrev: () => {
            console.log('previous slider item is shown');
        },
        onChange: () => {
            console.log('new slider item has been shown');
        },
        */
    };
    
    // instance options object
    const instanceOptions = {
      id: 'carousel-'+i,
      override: true
    };
    
    const carousel = new Carousel(document.getElementById('carousel-'+i), items, options, instanceOptions);
    
    document.getElementById('data-carousel-prev-'+i).onclick = () => {
        carousel.prev();
    };
    
    document.getElementById('data-carousel-next-'+i).onclick = () => {
        carousel.next();
    };
}