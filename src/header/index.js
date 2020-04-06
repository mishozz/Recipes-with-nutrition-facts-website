import React, { useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {Navbar, Nav, Form, FormControl,Button} from 'react-bootstrap';
import recipes from '../services/recipes';
import styles from './index.module.css';


const Header = (props) => {
  let history = useHistory();
  const [recipeHits, setRecipeHits] = useState([]);
  const [id, setId] = useState("");
  const [query, setQuery] = useState("");

  const handleChangeId = (e) => {
      setId(e.target.value);
  }
  
  const getQuery = () => {
    setQuery(id);
  }

  useEffect(()=>{
    async function fetchData(){
      const data = await recipes.getRecipeByQuery(query);
      if(data){
        setRecipeHits(data.hits);
        history.push({
          pathname: "/recipes",
          state: {
            recipeHits: data.hits
          }
        });
      }
    } 
    fetchData();
  }, [query]);

    return (
  <Navbar className={styles["navbar"]} expand="sm">    
       <div className={styles["navbar-link-container"]}>  
          <Link className={styles["header_navbarlink__WkHMf"]} to="/">Recipes with nutrion</Link>
       </div>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
          <div className={styles["navbar-link-container"]}>            
              <Link className={styles["header_navbarlink__WkHMf"]} to={{
                pathname:"/recipes",
                state: {
                  recipeHits: recipeHits
                }
              }}>Recipes catalog</Link>
          </div>
      </Nav>
      <Form inline>
        <FormControl value={id} onChange={handleChangeId} type="text" placeholder="Search" className="mr-sm-2" />
        <Button className={styles["btn"]} variant="outline-primary" type="button" onClick={getQuery} >
            Search
        </Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
    )
}

export default Header