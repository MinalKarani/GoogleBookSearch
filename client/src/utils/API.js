import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
  const APIKEY = "&api_key=AIzaSyCtLSHBF5Jzk3XmiucSvFj48gHSFoSZXhw";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    console.log("In saveBook function bookData" + JSON.stringify(bookData));
    return axios.post("/api/books", bookData);
  },

  
// Export an object with a "search" method that searches the Giphy API for the passed query

  search: function(query) {
    console.log(query);
    console.log(BASEURL + query + APIKEY);
    
    return axios.get(BASEURL + query + APIKEY);
  }

};
