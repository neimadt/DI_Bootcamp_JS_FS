const database = {
    getQuotes() {

        let result = localStorage.getItem('__quotes');
        result = result ? JSON.parse(result) : null;

        if (!result) {

            this.saveQuotes([
                { id: 0, author: 'Oscar Wilde', quote: 'Be yourself; everyone else is already taken.' },
                { id: 1, author: 'Mark Twain', quote: 'Age is an issue of mind over matter. If you don’t mind, it doesn’t matter.' },
                { id: 2, author: 'Albert Einstein', quote: 'Logic will get you from A to Z; imagination will get you everywhere.' },
                { id: 3, author: 'Dr. Seuss', quote: 'Don’t cry because it’s over, smile because it happened.' },
                { id: 4, author: 'Nelson Mandela', quote: 'It always seems impossible until it’s done.' },
                { id: 5, author: 'Maya Angelou', quote: 'I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.' },
                { id: 6, author: 'Winston Churchill', quote: 'Success is not final, failure is not fatal: It is the courage to continue that counts.' },
                { id: 7, author: 'Mahatma Gandhi', quote: 'The best way to find yourself is to lose yourself in the service of others.' },
                { id: 8, author: 'Babe Ruth', quote: 'Never let the fear of striking out keep you from playing the game.' },
                { id: 9, author: 'Steve Jobs', quote: 'Innovation distinguishes between a leader and a follower.' }
            ]);

            return this.getQuotes();
        }

        return result ?? [];
    },
    saveQuotes(value) {

        if (value && value.length > 0) {

            localStorage.setItem('__quotes', JSON.stringify(value));
        }
        else {

            localStorage.removeItem('__quotes');
        }
    }
};


export default database;
