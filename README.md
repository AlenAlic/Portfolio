# My personal web portfolio\*.

\*For now only in Dutch

## Installation

Install git and clone the repository.

    sudo apt -y install git
    git clone https://github.com/AlenAlic/Portfolio

Run the scripts from the `/scripts` folder.

## Scripts/Guides in order

- Script 'site': Will install the website, get an Let's Encrypt certificate and configure nginx.
- Script 'postfix': Will install and configure most of postfix and dovecot.
- Guide 'postfix': Final configuration of postfix
- Guide 'dovecot': Final configuration of dovecot
- Script 'dkim': Will install and generate a DKIM key

## Misc. scripts

- 'update_virtual_user_password': Update the password of a mail account
