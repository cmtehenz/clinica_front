import React, { useState } from "react";
import { useMutation } from '@tanstack/react-query';
import { addPatient } from '../../api'
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

function RegisterPatient() {
  const [registerEmailState, setregisterEmailState] = React.useState("");
  
  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  const registerClick = () => {
    if (registerEmailState === "") {
      setregisterEmailState("has-danger");
    }
    if (registerPasswordState === "" || registerConfirmPasswordState === "") {
      setregisterPasswordState("has-danger");
      setregisterConfirmPasswordState("has-danger");
    }
  };

  const addPatientMutation = useMutation((newPatientData) => addPatient(newPatientData), {
    onSuccess: () => {
      onSuccess();
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPatient = {
      name,
      age: Number(age),
    };

    console.log(newPatient)

    addPatientMutation.mutate(newPatient);    
  }


  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Form id="NewPatient" onSubmit={handleSubmit}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Novo Paciente</CardTitle>
                </CardHeader>
                <CardBody>
                  <FormGroup className={`has-label ${registerEmailState}`} >
                    <label>Nome</label>
                    <Input
                      name="name"
                      type="text"
                      value={name} 
                      onChange={(e) => setName(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className={`has-label ${registerEmailState}`}>
                    <label>Idade</label>
                    <Input
                      name="age"
                      type="number"
                      value={age} 
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </FormGroup>
                  <Button 
                    color="primary" 
                    // onClick={() => handleSubmit()}
                    
                  >
                    Salvar
                  </Button>
                </CardBody>
                <CardFooter className="text-right">
                  
                  
                </CardFooter>
              </Card>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default RegisterPatient;
