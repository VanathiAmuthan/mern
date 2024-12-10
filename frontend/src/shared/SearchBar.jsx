import React, { useRef, useState } from 'react';
import './search-bar.css';
import { Col, Form, FormGroup, Spinner } from 'reactstrap';
import { BASE_URL } from '../utils/config';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
   const locationRef = useRef('');
   const daysRef = useRef(0);
   const maxGroupSizeRef = useRef(0);
   const navigate = useNavigate();
   const [loading, setLoading] = useState(false);

   const searchHandler = async () => {
      const location = locationRef.current.value;
      const days = daysRef.current.value;
      const maxGroupSize = maxGroupSizeRef.current.value;

      if (location === '' || days === '' || maxGroupSize === '') {
         return alert('All fields are required!');
      }

      setLoading(true); // Show loading spinner
      try {
         const res = await fetch(
            `${BASE_URL}/tours/search/getTourBySearch?city=${location}&days=${days}&maxGroupSize=${maxGroupSize}`
         );

         if (!res.ok) {
            throw new Error('Failed to fetch tours');
         }

         const result = await res.json();

         if (result.data.length === 0) {
            alert('No tours found for the given criteria.');
         } else {
            navigate(
               `/tours/search?city=${location}&days=${days}&maxGroupSize=${maxGroupSize}`,
               { state: result.data }
            );
         }
      } catch (error) {
         console.error(error);
         alert('Something went wrong. Please try again later.');
      } finally {
         setLoading(false); // Hide loading spinner
      }
   };

   return (
      <Col lg="12">
         <div className="search__bar">
            <Form className="d-flex align-items-center gap-4">
               <FormGroup className="d-flex gap-3 form__group form__group-fast">
                  <span>
                     <i className="ri-map-pin-line"></i>
                  </span>
                  <div>
                     <h6>Location</h6>
                     <input
                        type="text"
                        placeholder="Where are you going?"
                        ref={locationRef}
                     />
                  </div>
               </FormGroup>
               <FormGroup className="d-flex gap-3 form__group form__group-fast">
                  <span>
                     <i className="ri-calendar-event-line"></i>
                  </span>
                  <div>
                     <h6>Days</h6>
                     <input
                        type="number"
                        placeholder="Days"
                        ref={daysRef}
                     />
                  </div>
               </FormGroup>
               <FormGroup className="d-flex gap-3 form__group form__group-last">
                  <span>
                     <i className="ri-group-line"></i>
                  </span>
                  <div>
                     <h6>Max People</h6>
                     <input
                        type="number"
                        placeholder="0"
                        ref={maxGroupSizeRef}
                     />
                  </div>
               </FormGroup>

               <button
                  className="search__icon"
                  type="button"
                  onClick={searchHandler}
                  disabled={loading}
               >
                  {loading ? (
                     <Spinner size="sm" />
                  ) : (
                     <i className="ri-search-line"></i>
                  )}
               </button>
            </Form>
         </div>
      </Col>
   );
};

export default SearchBar;
