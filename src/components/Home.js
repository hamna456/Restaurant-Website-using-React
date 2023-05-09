import React, { useEffect } from 'react';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    const synth = window.speechSynthesis;
    const message = new SpeechSynthesisUtterance('Welcome to Sizzling Bites!');

    // Set the voice for the message (optional)
    const voices = synth.getVoices();
    message.voice = voices[0];

    // Speak the message
    synth.speak(message);

    // Clean up the SpeechSynthesis object when the component unmounts
    return () => {
      synth.cancel();
    };
  }, []);

  return (
    <>
      <section className="home" id="home">
        <div className="content">
          <Typography variant="h3" component="h3">
            Spice up your life at <span>Sizzling Bites</span>
          </Typography>
          <Typography variant="body1" component="p">
            Experience a fiery burst of flavors in every bite at Sizzling Bites Restaurant, which offers a tantalizing culinary adventure with fiery flavors and bold signature dishes.
          </Typography>
          <Link to="/menu">
                <Button 
                    variant="contained" 
                    sx={{ 
                        backgroundColor: '#ffc107', 
                        color: 'black', 
                        borderColor: '#ffc107',
                        borderWidth: '2px', 
                        '&:hover': { 
                            backgroundColor: '#ffd54f', 
                            color: 'black', 
                            borderColor: '#ffd54f', 
                        },
                        width: '200px',
                        height: '60px',
                        fontSize: '20px',
                    }}
                >
                    Order Now!
                </Button>
            </Link>

        </div>
      </section>
    </>
  );
};

export default Home;
