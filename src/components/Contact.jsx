import React from 'react'

const Contact = () => {
    return (
        <div id="contact" class="w3-container w3-center w3-padding-32">
            <h2 class="w3-wide">CONTACT</h2>
            <p class="w3-opacity w3-center"><i>We'll get back to you right after a coffee or two!</i></p>

            <form target="_blank">
                <input class="w3-input" type="text" placeholder="Name" required name="Name" />
                <input class="w3-input" type="text" placeholder="Email" required name="Email" />
                <input class="w3-input" type="text" placeholder="Message" required name="Message" />
                <br />
                <button class="w3-button w3-black" type="submit">SEND</button>
            </form>
        </div>
    )
}

export default Contact
