import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer class="footer text-center">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h4 class="mb-4"></h4>
                        <p class="pre-wrap lead mb-0"> </p>
                    </div>
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h4 class="mb-4">AROUND THE WEB</h4><a class="btn btn-outline-light btn-social mx-1" href="https://www.twitter.com/rfazily"><i class="fab fa-fw fa-twitter"></i></a><a class="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/rfazily"><i class="fab fa-fw fa-linkedin-in"></i></a>
                    </div>
                    <div class="col-lg-4">
                        <h4 class="mb-4"></h4>
                        <p class="pre-wrap lead mb-0"> </p>
                    </div>
                </div>
            </div>
        </footer>
        )
    }
} export default Footer;