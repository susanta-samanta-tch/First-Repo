
# To link second git account to laptop follow this steps:

## step 1:
    First create ssh key in local laptop
    like this :
        (base) PS C:\Users\HP\Desktop\Work> ssh-keygen -t ed25519 -C "susanta samanta@thecodershub.co.in"
        Generating public/private ed25519 key pair.
        Enter file in which to save the key (C:\Users\HP/.ssh/id_ed25519): C:\Users\HP\.ssh\office_github
        Enter passphrase (empty for no passphrase): 
        Enter same passphrase again: 
        Your identification has been saved in C:\Users\HP\.ssh\office_github
        Your public key has been saved in C:\Users\HP\.ssh\office_github.pub
        The key fingerprint is:
        SHA256:..sdf.......C...............Ra0c8B4 susanta.samanta@thecodershub.co.in
        The key's randomart image is:
        +--[ED25519 256]--+
        |..o=+.oo.o       |
        |. o. .o E.B      |
        |      o   +      |
        |                 |
        |                 |
        +----[SHA256]-----+

    After this
        inside C:\Users\HP\.ssh folder two file generated : office_github, office_github.pub

## step 2:
    (base) PS C:\Users\HP\Desktop\Work> Get-Content ~/.ssh/office_github.pub
    ssh-ed....519 EEE.....ZDI1NTE5....IA0p....0....i4u....JYN/1/b...nm....B..e5...xu0....kCx susanta.samanta@thecodershub.co.in

    copy this line (if you want go to office_github.pub and copy the kay)

## step 3:
    Login to your office GitHub account (susanta-samanta-tch).

    Open: GitHub SSH Keys Settings

    Click: New SSH Key

    Fill: Title: Office work

    Key: Paste the entire ssh-ed25519 ... line. (copy from C:\Users\HP\.ssh\office_github.pub)

    Click: Add SSH Key

## step 4: (To verify or Test the Key)
    (base) PS C:\Users\HP\Desktop\Work> ssh -i ~/.ssh/office_github -T git@github.com
    Hi susanta-samanta-tch! You've successfully authenticated, but GitHub does not provide shell access.

## step 5: (To clone repo)

### Copy ssh repo link then :  
    Then clone this way : 
    (base) PS C:\Users\HP\Desktop\Work>  $env:GIT_SSH_COMMAND='ssh -i "C:\Users\HP\.ssh\office_github"'
    (base) PS C:\Users\HP\Desktop\Work>  git clone git@github.com:susanta-samanta-tch/First-Repo.git
    Cloning into 'First-Repo'...
    remote: Enumerating objects: 44,       done.                                                                                     
    remote: Counting objects: 100% (44/44),        done.                                                                                     remote: Compressing objects: 100% (39/39),     done.
    Receiving objects: 100% (44/44), 35.20 KiB | 203.00 KiB/s, done.rom                                                                          
    Resolving deltas: 100% (3/3), done.
    (base) PS C:\Users\HP\Desktop\Work\test2> 

### then check origin :
    (base) PS C:\Users\HP\Desktop\Work> cd .\First-Repo\
    (base) PS C:\Users\HP\Desktop\Work\First-Repo> git remote -v
    origin  https://github.com/susanta-samanta-tch/First-Repo.git (fetch)
    origin  https://github.com/susanta-samanta-tch/First-Repo.git (push)

### Commit like this :
    (base) PS C:\Users\HP\Desktop\Work\First-Repo> git add .                         
    (base) PS C:\Users\HP\Desktop\Work\First-Repo> git commit -m "update readme"     
    [main 98e6bf3] update readme
    1 file changed, 66 insertions(+)

### Push like this :
    (base) PS C:\Users\HP\Desktop\Work\First-Repo>  $env:GIT_SSH_COMMAND='ssh -i "C:\Users\HP\.ssh\office_github"'
    (base) PS C:\Users\HP\Desktop\Work\First-Repo> git push
    Enumerating objects: 5, done.
    Counting objects: 100% (5/5), done.
    Delta compression using up to 16 threads
    Compressing objects: 100% (3/3), done.
    Writing objects: 100% (3/3), 1.26 KiB | 1.26 MiB/s, done.

 

