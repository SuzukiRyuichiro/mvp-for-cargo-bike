nslookup -type=mx docomo.ne.jp

# Connect to the mail server using telnet
telnet mfsmax.docomo.ne.jp 25

# Simulate the email sending process
HELO gmail.com
MAIL FROM:<dragon.aka.scooter@gmail.com>
RCPT TO:<me@ryuichirosuzuki.com>
QUIT
