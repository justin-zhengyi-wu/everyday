#### Use Justwriting, Markdown and SAE to build your own Blog site

1,  Download [Justwriting](https://github.com/hjue/JustWriting/zipball/master)

2,  Unzip the package, edit the file settings.php

3,  Visit [SAE](http://sae.sina.com.cn/), login(register if not) and create a new Application.

4,  Check out the code repository, replace the following "<appID>" with your real appID, for example, "simpleblog", the username of svn asks is your email address when registering SAE, the password is your security password.
```sh
svn co https://svn.sinaapp.com/<appID>
```

5,  Check in your codes
```sh
cd simpleblog
mkdir 1
cd 1
```
Put your codes from STEP-2 into this directory, add new posts under `/posts` with markdown formats, submit them.

6,  Visit your [App](http://simpleblog.sinaapp.com/), that's it!


##### For now, you can edit your posts in markdown format at local env, then check-in to SAE and publish them in public.
