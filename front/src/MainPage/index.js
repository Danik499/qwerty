import React, { Component } from 'react'
import Style from './style.css'
import { ICON_NAME, FaGalacticSenate, FaHandMiddleFinger } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";


export default class Main extends Component {
   constructor(props) {
      super(props)
      this.state = {
         shows: false
      }
      this.hendleClick = this.hendleClick.bind(this)
   }
   hendleClick() {
      this.setState(state => ({
         shows: !state.shows
      }))
   }
   render() {
      return (
         <div>
            <div className="container-fluid">
               <div className="row">
                  <div id="block-left">
                     <h1 className="h1">Asap</h1>
                     <h2 className="h2">N.E.S.</h2>
                  </div>
                  <Modal show={this.state.shows}>
                     <Modal.Header></Modal.Header>
                     <Modal.Body>
                        <form>
                           <div class="form-group">
                              <label for="exampleInputEmail1">Email address</label>
                              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                           </div>
                           <div class="form-group">
                              <label for="exampleInputPassword1">Password</label>
                              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                           </div>
                           <div class="form-check">
                              <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                              <label class="form-check-label" for="exampleCheck1">Check me out</label>
                           </div>
                           <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                     </Modal.Body>
                     <Modal.Footer><button type="button" class="btn btn-outline-light btn-block" onClick={this.hendleClick}>Назад</button></Modal.Footer>
                  </Modal>
                  <div id="block-right">
                     <div className="buttons">
                        <button type="button" class="btn btn-outline-light btn-block" onClick={this.hendleClick}>Увійти</button>
                        <button type="button" class="btn btn-outline-light btn-block" data-toggle="modal" data-target="#basicModal">Зареєструвати</button>
                     </div>
                  </div>
               </div>
            </div>
         </div >
      )
   }
}
