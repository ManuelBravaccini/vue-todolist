const { createApp } = Vue

createApp({
    data() {
        return {
            newItem: '',
            shoppingList : [
                {
                    text: 'patate',
                    done: false,
                },
                {
                    text: 'salsicce vegane',
                    done: true,
                },
                {
                    text: 'latte di mandorle',
                    done: false,
                }

            ],

        }
    },
    methods: {
        addNewItem(content){
            content = content.toLowerCase();

            if( content != '' && content.length >= 2){
                const newObjectContent = {
                    text: content,
                    done: false
                }

                this.shoppingList.push(newObjectContent);
                this.clearUserInput();
            } else {
                console.warn('Il contenuto è vuoto');
            }
        },
        clearUserInput(){
            this.newItem = '';
        },

        removeItem(itemIndex){
            this.shoppingList.splice( itemIndex, 1 );
        },

        clickedElement(index){
            this.shoppingList[index].done = !this.shoppingList[index].done;
        }


    },
}).mount('#app');