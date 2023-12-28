## ECDSA Node

This project is an example of using a client and server to facilitate transfers between different addresses. Since there is just a single server on the back-end handling transfers, this is clearly very centralized. We won't worry about distributed consensus for this project.

However, something that we would like to incoporate is Public Key Cryptography. By using Elliptic Curve Digital Signatures we can make it so the server only allows transfers that have been signed for by the person who owns the associated address.

Although it illustrates the concept, transactions should be signed locally on the user's machine without communicating to a server where the private key is checked. The same logic applies, the difference is where it is applied. Never share your private key.
