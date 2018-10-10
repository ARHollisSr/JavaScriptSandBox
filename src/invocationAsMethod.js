function whatsMyContext() {
  return this;
}

var getMyThis = whatsMyContext;

var ninja = {getMyThis: whatsMyContext}

var ninja2 = {getMyThis: whatsMyContext}