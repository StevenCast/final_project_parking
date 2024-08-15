int buttonPin1 = 2; // Pin digital para el botón
int buttonPin2 = 3;
int buttonPin3 = 4;
int buttonPin4 = 5;
int buttonPin5 = 6;
int buttonPin6 = 7;

void setup()
{
  pinMode(buttonPin1, INPUT_PULLUP); // Configurar el pin como entrada con pull-up
  pinMode(buttonPin2, INPUT_PULLUP);
  pinMode(buttonPin3, INPUT_PULLUP);
  pinMode(buttonPin4, INPUT_PULLUP);
  pinMode(buttonPin5, INPUT_PULLUP);
  pinMode(buttonPin6, INPUT_PULLUP);
  Serial.begin(9600); // Iniciar la comunicación serial
}

void loop()
{
  int buttonState1 = digitalRead(buttonPin1); // Leer el estado del botón
  int buttonState2 = digitalRead(buttonPin2);
  int buttonState3 = digitalRead(buttonPin3);

  int buttonState4 = digitalRead(buttonPin4);
  int buttonState5 = digitalRead(buttonPin5);
  int buttonState6 = digitalRead(buttonPin6);
  Serial.print("Estado1:");
  Serial.println(buttonState1);
  Serial.print("Estado2:");
  Serial.println(buttonState2);
  Serial.print("Estado3:");
  Serial.println(buttonState3);
  Serial.print("Estado4:");
  Serial.println(buttonState4);
  Serial.print("Estado5:");
  Serial.println(buttonState5);
  Serial.print("Estado6:");
  Serial.println(buttonState6);
  // delay(3000);
}
